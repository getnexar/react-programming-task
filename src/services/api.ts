type ResponseType<T> = {status: number; statusText: string; data?: T};

export async function api<T>({
  url,
  method = 'GET',
  data,
}: {
  url: string;
  method: string;
  data: object;
}): Promise<ResponseType<T>> {
  const responce = await fetch(url, {
    method,
    body: JSON.stringify(data),
  });

  if (!responce.ok) {
    return {
      status: responce.status,
      statusText: responce.statusText,
    };
  }

  const responceData = await responce.json();
  return {
    status: responce.status,
    statusText: responce.statusText,
    data: responceData,
  };
}
