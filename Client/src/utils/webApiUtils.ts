import { protectedResources } from '../authConfig';

export const getWorkouts = async (accessToken: object) => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    const response = await fetch(protectedResources.apiWorkoutsList.endpoint, options);
    const data = await response.json();

    return data;
}

export const getWorkoutById = async (id: string, accessToken: object) => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    const response = await fetch(`${protectedResources.apiWorkoutsList.endpoint}/${id}`, options);
    const data = await response.json();

    return data;
}