// Placed in separate file to setup frappe resource fetcher before loading the app.
import { frappeRequest, setConfig } from "frappe-ui";
const subpath = window.location.pathname.split("/builder")[0];
setConfig("baseUrl", subpath);
setConfig("resourceFetcher", frappeRequest);
