import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fetchUserProfile = async () => {
  // Replace with your API call
  return {
    username: "user1",
    email: "user1@example.com",
    photos: [
      {
        id: 1,
        title: "Sample Photo 1",
        description: "This is a sample photo description.",
        url: "/placeholder.svg",
      },
      {
        id: 2,
        title: "Sample Photo 2",
        description: "This is another sample photo description.",
        url: "/placeholder.svg",
      },
    ],
  };
};

const Profile = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="mb-4">
        <p><strong>Username:</strong> {data.username}</p>
        <p><strong>Email:</strong> {data.email}</p>
      </div>
      <Button>Edit Profile</Button>
      <h2 className="text-xl font-bold mt-6 mb-4">My Photos</h2>
      <div className="grid grid-cols-1 gap-4">
        {data.photos.map((photo) => (
          <Card key={photo.id}>
            <CardHeader>
              <CardTitle>{photo.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={photo.url} alt={photo.title} className="mx-auto object-cover w-full h-[200px]" />
              <p>{photo.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Profile;