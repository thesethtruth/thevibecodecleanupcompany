import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };


// Function to truncate filename while preserving extension
export const truncateFilename = (filename: string, maxLength: number = 20): string => {
		if (filename.length <= maxLength) return filename;

		const lastDotIndex = filename.lastIndexOf('.');
		if (lastDotIndex === -1) {
			// No extension found, just truncate
			return filename.substring(0, maxLength - 3) + '...';
		}

		const extension = filename.substring(lastDotIndex);
		const nameWithoutExt = filename.substring(0, lastDotIndex);
		const availableLength = maxLength - extension.length - 3; // 3 for '...'

		if (availableLength <= 0) {
			// Extension is too long, just show extension
			return '...' + extension;
		}

		return nameWithoutExt.substring(0, availableLength) + '...' + extension;
	};
