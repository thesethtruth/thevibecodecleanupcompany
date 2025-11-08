<script lang="ts">
	import ActionTable from '$lib/components/action-table.svelte';
	import type { DocumentEntry } from '$lib/components/overview-table';
	import OverviewTable from '$lib/components/overview-table.svelte';
	import { getAllOffertes } from '$lib/api';
	import { createProjectFormLogic } from '$lib/components/project-form-logic.svelte';
	import ProjectForm from '$lib/components/project-form.svelte';
	import Text from '$lib/components/text.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { FileUp } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	import type { FormDataInterface } from './new/shared.svelte';

	let documents = $state<DocumentEntry[]>([]);
	let editDialogOpen = $state(false);
	let cancelDialogOpen = $state(false);
	let editFormData = $state<FormDataInterface>({
		id: null,
		projectCode: '',
		projectName: '',
		projectStatus: null,
		files: []
	});

	const formLogic = $derived(
		createProjectFormLogic(
			editFormData,
			() => {
				// reset form
				resetEditFormData();
				// close dialog
				editDialogOpen = false;
				// show success toast
				toast.success('Project updated successfully!');
			},
			true
		)
	);

	function handleEditClick(document: DocumentEntry) {
		// Convert DocumentEntry to FormDataInterface
		editFormData = {
			id: document.id,
			projectCode: document.projectCode,
			projectName: document.projectName,
			projectStatus: document.status,
			files: document.fileNames.map((name, index) => ({
				name,
				uri: `http://localhost:3000/uploads/${name}`,
				order: index + 1
			}))
		};
		editDialogOpen = true;
	}

	function handleCancel() {
		if (formLogic.formLoading) return;
		if (
			editFormData.projectCode !== '' ||
			editFormData.projectName.length > 0 ||
			editFormData.files.length > 0
		) {
			cancelDialogOpen = true;
		} else {
			completeCancel();
		}
	}

	function completeCancel() {
		if (formLogic.formLoading) return;
		resetEditFormData();
		cancelDialogOpen = false;
		editDialogOpen = false;
	}

	function resetEditFormData() {
		editFormData = {
			id: null,
			projectCode: '',
			projectName: '',
			projectStatus: null,
			files: []
		};
	}
</script>

<div class="flex w-full flex-row">
	<Text variant="h1">Welcome to the TIV app</Text>
	<div class="ml-auto">
		<Button variant="default" size="lg" href="/new">
			<FileUp />Upload new project</Button
		>
	</div>
</div>

<div class="mt-8 flex w-full flex-col gap-8">
	{#await getAllOffertes()}
		<p>Loading...</p>
	{:then offertes}
		{@const documents = offertes.map(
			(offerte) =>
				({
					id: offerte.id,
					projectName: offerte.offerte_naam,
					projectCode: offerte.project_code,
					status: offerte.processing_status,
					lastEdited: offerte.created_at,
					fileNames: offerte.files?.map((file) => file.file_name) ?? []
				}) as DocumentEntry
		)}
		<ActionTable title="Action required" {documents} />
		<OverviewTable title="Your submitted projects" {documents} onEditClick={handleEditClick} />
	{:catch error}
		<p>Error: {error.message}</p>
	{/await}
</div>

<Dialog.Root bind:open={editDialogOpen}>
	<Dialog.Content class="min-w-4xl max-h-[92vh] max-w-6xl overflow-y-auto">
		<Dialog.Header>
			<Dialog.Title>Edit project</Dialog.Title>
			<Dialog.Description>Update the project details and attachments below.</Dialog.Description>
		</Dialog.Header>

		<ProjectForm
			formData={editFormData}
			formLoading={formLogic.formLoading}
			formError={formLogic.formError}
			formReadyToSubmit={formLogic.formReadyToSubmit}
			editing={true}
			onSubmit={formLogic.handleSubmit}
			onCancel={handleCancel}
			onUpload={formLogic.handleUpload}
			onDragStart={formLogic.handleDragStart}
			onDragOver={formLogic.handleDragOver}
			onDrop={formLogic.handleDrop}
		/>
	</Dialog.Content>
</Dialog.Root>

<Dialog.Root bind:open={cancelDialogOpen}>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Cancel editing project?</Dialog.Title>
			<Dialog.Description>
				Are you sure you want to cancel editing this project? This will discard all unsaved changes.
			</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Button variant="outline" onclick={() => (cancelDialogOpen = false)}>Go back</Button>
			<Button onclick={completeCancel}>Cancel editing</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
