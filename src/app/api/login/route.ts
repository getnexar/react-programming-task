type RouteRequest = {
  email: string;
  password: string;
};

type RandomUser = {
  name: {title: string; first: string; last: string};
};

type RandomUserResponce = {
  results: RandomUser[];
};

export async function POST(request: Request) {
  try {
    const requestData: RouteRequest = await request.json();
    if (requestData.email !== 'test@test.com' || requestData.password !== '1111') {
      return new Response('Invalid user credentials', {
        status: 400,
      });
    }

    const responce = await fetch('https://randomuser.me/api/?results=1&inc=name&noinfo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data: RandomUserResponce = await responce.json();

    return Response.json(data?.results?.[0]);
  } catch (e) {
    return new Response('Server error', {
      status: 500,
    });
  }
}
