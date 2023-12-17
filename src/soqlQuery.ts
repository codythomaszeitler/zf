export interface SoqlQuery {
	fields? : string[];
	from: string;
	where?: string;
}