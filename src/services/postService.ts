import { request } from "../Api/api";
import { type PostDto } from "../types/post";

export const postService = {
    async getPosts() {
        return request<PostDto[]>("/Post");
    },

    async createPost(content: string) {
        return request<PostDto>("/Post", {
            method: "POST",
            body: JSON.stringify({ content })
        });
    }
};