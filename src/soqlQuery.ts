export type SoqlQuery = {
	fields?: string[];
	from: string;
	where?: string;
} | string;