import { Example } from "models/example";

const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function getExampleItems(): Promise<Example[]> {
    const allExamples = await fetch(`${API_URL}/examples`);
    if (allExamples.ok) {
        return await allExamples.json();
    } else {
        throw Error(`Failed to getExampleItem. Expected 200 but recieved ${allExamples.status}`);
    }
}
