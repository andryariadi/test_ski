const DestinationDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div className="min-h-screen flex items-center justify-center">Soon... if you are interested with destination {id}</div>;
};

export default DestinationDetail;
