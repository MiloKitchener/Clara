export class DatasetConfirmation {
	db_Name: string;
	db_desc: string;
	db_fields: DBField[];
}

class DBField {
	field_name: string;
	data_type: string;
	norm_name_list: [];
}