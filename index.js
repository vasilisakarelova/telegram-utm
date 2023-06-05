import {getCookie} from "~/utils";

let query = {
    utm_source: route.query.utm_source ? route.query.utm_source : '',
    utm_campaign: route.query.utm_campaign ? route.query.utm_campaign : '',
    utm_medium: route.query.utm_medium ? route.query.utm_medium : '',
    utm_term: route.query.utm_term ? route.query.utm_term : '',
    utm_content: route.query.utm_content ? route.query.utm_content : '',
};
query = new URLSearchParams(query).toString();
if (query) {
    query = `?${query}`;
}

//  Потом в месте, где вы испольщуете ссылку, лобавляете эти метки:
const link = `https://github.com${query}`