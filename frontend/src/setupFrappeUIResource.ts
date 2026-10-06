// Placed in separate file to setup frappe resource fetcher before loading the app.
import { frappeRequest, setConfig } from "frappe-ui";
import { editorDemo } from "@/utils/editorDemo";
import { createEditorDemoBackend } from "@/utils/editorDemoBackend";

// the app may be mounted under a URL prefix; API calls must carry it
const subpath = window.location.pathname.split("/builder")[0];
setConfig("baseUrl", subpath);
setConfig("resourceFetcher", editorDemo ? createEditorDemoBackend(editorDemo) : frappeRequest);
