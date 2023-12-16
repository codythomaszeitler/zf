export interface SoqlQuery {
	fields? : string[];
	from: string;
	condition?: string;
}