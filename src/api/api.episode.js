import axios from "axios";
import { instanse } from "./api.instanse";
export const EpisodeAll = {

    async getAllEpisode({ name, page }) {
        const respons = await instanse.get('/episode', {
            params: {
                name,
                page,
            }
        })
        return respons.data
    },
}