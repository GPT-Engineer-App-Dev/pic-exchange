import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Heart } from "lucide-react";

const fetchPhotos = async () => {
  // Replace with your API call
  return [
    {
      id: 1,
      title: "Sample Photo 1",
      description: "This is a sample photo description.",
      username: "user1",
      url: "/placeholder.svg",
    likes: 0,
    },
    {
      id: 2,
      title: "Sample Photo 2",
      description: "This is another sample photo description.",
      username: "user2",
      url: "/placeholder.svg",
    likes: 0,
    },
  ];
};

const Feed = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading photos</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export const PhotoCard = ({ photo }) => {
  const [likes, setLikes] = useState(photo.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{photo.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={photo.url} alt={photo.title} className="mx-auto object-cover w-full h-[200px]" />
        <p>{photo.description}</p>
        <p className="text-sm text-muted-foreground">Uploaded by {photo.username}</p>
        <div className="flex items-center mt-2">
          <Button variant={liked ? "solid" : "outline"} onClick={handleLike} className="flex items-center space-x-2">
            <Heart className={liked ? "text-red-500" : "text-muted-foreground"} />
            <span>{likes}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Feed;