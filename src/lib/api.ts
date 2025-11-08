import type { components, paths } from '$lib/types/api.ts';
import createClient from "openapi-fetch";

const client = createClient<paths>({ baseUrl: "http://127.0.0.1:8000/" });


export async function uploadDocument(file: File): Promise<string> {
	const { data, error } = await client.POST("/api/v1/documents/upload", {
		body: {
			file: file as unknown as string
		},
		bodySerializer(body) {
			const formData = new FormData();
			formData.append('file', file);
			return formData;
		}
	});

	if (error) {
		throw new Error(`Upload failed: ${JSON.stringify(error)}`);
	}

	const response = data
	if (!response || !response.doc_URI) {
		throw new Error('Invalid response from server');
	}

	return response.doc_URI;
}

export async function createOfferte(
	offerteData: components["schemas"]["OfferteCreate"]
): Promise<components["schemas"]["OfferteResponse"]> {
	const { data, error } = await client.POST("/api/v1/offertes/", {
		body: offerteData
	});

	if (error) {
		throw new Error(`Failed to create offerte: ${JSON.stringify(error)}`);
	}

	if (!data) {
		throw new Error('Invalid response from server');
	}

	return data;
}

export async function getAllOffertes(): Promise<components['schemas']['OfferteResponse'][]> {
	const { data, error } = await client.GET('/api/v1/offertes/');

	if (error) {
		throw new Error(`Failed to get all offertes: ${JSON.stringify(error)}`);
	}

	if (!data) {
		throw new Error('Invalid response from server');
	}

	return data;
}
