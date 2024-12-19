

export const postForm = async (data: any) => {
    const response = await fetch('http://portfolio-api.juancarlosjiron.com/api/contact/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return response.json();
}