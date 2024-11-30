import axios from "axios";
import { instanse } from "./api.instanse";
export const CharacterAll = {

    async getAllChar({ name, page }) {
        const respons = await instanse.get('/character', {
            params: {
                name,
                page,
            }
        })
        return respons.data
    },
}