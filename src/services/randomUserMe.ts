type RandomUser = {
  name: {title: string; first: string; last: string};
};

type RandomUserResponce = {
  results: RandomUser[];
};

export async function fetchUser(): Promise<RandomUser | undefined> {
  try {
    const responce = await fetch('https://randomuser.me/api/?results=1&inc=name&noinfo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data: RandomUserResponce = await responce.json();

    return data?.results?.[0];
  } catch (e) {
    return undefined;
  }
}
