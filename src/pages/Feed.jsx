import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchPhotos = async () => {
  // Replace with your API call
  return [
    {
      id: 1,
      title: "Sample Photo 1",
      description: "This is a sample photo description.",
      username: "user1",
      url: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Sample Photo 2",
      description: "This is another sample photo description.",
      username: "user2",
      url: "/placeholder.svg",
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
        <Card key={photo.id}>
          <CardHeader>
            <CardTitle>{photo.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={photo.url} alt={photo.title} className="mx-auto object-cover w-full h-[200px]" />
            <p>{photo.description}</p>
            <p className="text-sm text-muted-foreground">Uploaded by {photo.username}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Feed;