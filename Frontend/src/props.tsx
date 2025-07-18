export interface MessageProps {
	sender: string;
	content: string;
	time: string;
	isIncoming: boolean;
}


export interface MessagesProps {
	data?: MessageProps[];
}
