
export interface Post {
	id: number;
	title: { rendered: string };
	excerpt: { rendered: string, protected: boolean };
	content: { rendered: string, protected: boolean };
	categories: number[];
	tags: number[];
	date: string;
	featured_media: number;
	_links: { 
		'wp:term': {
			href: string;
			embeddable: boolean;
			taxonomy: string;
		}[];
	};
	acf: Acf;
}

interface Acf {
	frontend_stack: number[];
	backend_stack: number[];
	devops_stack: number[];
	languages_stack: number[];
	achievements: {
		tech_achievements: string;
		design_achievements: string;
		other_achievements: string;
	}
	[key: string]: unknown;
}