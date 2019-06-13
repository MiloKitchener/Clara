export class User {
	name: string;
	title: string;
	pictureSrc: string;

	constructor(name: string, title: string, pictureSrc: string) {
		this.name = name;
		this.title = title;
		this.pictureSrc = pictureSrc;
	}

	public getName(): string {
		return this.name;
	}

	public getTitle(): string {
		return this.title;
	}

	public getPictureSrc(): string {
		return this.pictureSrc;
	}
}
