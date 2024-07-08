import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhotoCard } from "./Feed";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Heart } from "lucide-react";

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
        likes: 0,
      },
      {
        id: 2,
        title: "Sample Photo 2",
        description: "This is another sample photo description.",
        url: "/placeholder.svg",
        likes: 0,
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
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Profile;