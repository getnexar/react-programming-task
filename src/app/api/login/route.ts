import {fetchUser} from '@services/randomUserMe';

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

    const user = await fetchUser();

    return Response.json(user);
  } catch (e) {
    return new Response('Server error', {
      status: 500,
    });
  }
}
