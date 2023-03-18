export async function loadProductsList(pageSize, offset) {
    const query = { pageSize, offset };
        if (!query.offset) delete query.offset;
        const params = new URLSearchParams(query);
        const url = `https://api.airtable.com/v0/app1s6GJrvoxihIcc/Products?${params}`;
        const token = "patQ53WuDK30GnFAY.8210cfac6b77b7a719a93687ceacb0a63db549f7e7cbde231dee5f4ebe004994"
        const response = await fetch(url, {
            headers: {Authorization: `Bearer ${token}`},
        });
        const data = await response.json();
        data.records = data.records.map(el => el.fields);
        return data;
}