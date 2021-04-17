import "fosscord-css/scss/card.scss";
import { ReactNode } from "react";
import { Icon } from "./Icon";

export interface CardProps {
	children?: ReactNode;
	header?: string;
	icon?: string;
	title?: string;
	description?: string;
	verified?: boolean;
	partnered?: boolean;
}

export function Card(props: CardProps) {
	return (
		<div className="card">
			<span className="header" style={{ backgroundImage: `url(${props.header})` }}></span>
			<span className="logo">
				<img src={props.icon} alt="" />
			</span>
			<div className="content">
				<div className="title">
					{props.verified && (
						<Icon className="badge" icon="certificate" color="var(--success)"></Icon>
					)}
					{props.title}
				</div>
				<p className="description">{props.description}</p>

				{props.children}
			</div>
		</div>
	);
}
