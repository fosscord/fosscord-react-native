import { Payload } from ".";
import { Client } from "../Client";
import Events from "../events/";

export async function Dispatch(this: Client, data: Payload) {
	if (!data.t || typeof data.t !== "string") return;

	try {
		// @ts-ignore
		const event = Events[data.t];
		if (!event) throw new Error("Unkown :" + data.t);
		await event.call(this, data);
	} catch (error) {
		console.error("[WebSocket] Event", error);
	}
}
