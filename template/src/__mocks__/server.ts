import Pretender, { ResponseData } from "pretender";
import { Example } from "../models/example";

const API_URL = process.env.REACT_APP_API_BASE_URL;

const EXAMPLES: Example[] = [
    {
        id: "1",
        data: "data item 1"
    },
    {
        id: "2",
        data: "data item 2"
    }
];

export function makeServer(requestDelay: number = 0) {
    const server = new Pretender(function () {
        this.get(`${API_URL}/examples`, () => {
            return OKObjectResponse(JSON.stringify(EXAMPLES));
        }, requestDelay);

        this.get(`${API_URL}/examples/:id`, request => {
            if (!request.params.id) return BadRequestResponse("id");

            const id = request.params.id as string;
            const example = EXAMPLES.find(i => i.id === id);

            if (!example) return NotFoundResponse(id as string);

            return OKObjectResponse(JSON.stringify(example));
        }, requestDelay);
    });

    server.unhandledRequest = (verb, path, request: any) => {
        const xhr = request.passthrough(); // <-- A native, sent xhr is returned

        xhr.onloadend = (ev: any) => {
            console.error(`Recieved unhandled request: ${verb} | ${path}`, request);
        };
    }

    server.handledRequest = (verb, path, request) => {
        console.log(`Request: ${verb} | ${path}`, request);
    }

    return server;
}

function OKObjectResponse(data: string): ResponseData {
    return [200, { "Content-Type": "application/json" }, data];
}

function BadRequestResponse(...missingFields: string[]): ResponseData {
    const response = { "statusCode": 400, "reason": `400 - Bad Request. Missing parameters: ${missingFields.join(", ")}` };

    return [400, { "Content-Type": "application/json" }, JSON.stringify(response)];
}

function NotFoundResponse(id: string): ResponseData {
    return [404, { "Content-Type": "application/json" }, JSON.stringify({ statusCode: 404, reason: `404 - ID '${id}' not found` })];
}
