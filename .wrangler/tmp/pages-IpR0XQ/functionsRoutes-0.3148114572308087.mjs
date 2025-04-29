import { onRequestGet as __api_rsvp_ts_onRequestGet } from "C:\\d\\Projects\\wedding-react\\functions\\api\\rsvp.ts"
import { onRequestOptions as __api_rsvp_ts_onRequestOptions } from "C:\\d\\Projects\\wedding-react\\functions\\api\\rsvp.ts"
import { onRequestPost as __api_rsvp_ts_onRequestPost } from "C:\\d\\Projects\\wedding-react\\functions\\api\\rsvp.ts"

export const routes = [
    {
      routePath: "/api/rsvp",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_rsvp_ts_onRequestGet],
    },
  {
      routePath: "/api/rsvp",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_rsvp_ts_onRequestOptions],
    },
  {
      routePath: "/api/rsvp",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_rsvp_ts_onRequestPost],
    },
  ]