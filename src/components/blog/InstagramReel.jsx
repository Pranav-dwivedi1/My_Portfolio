
export default function InstagramReel({ videoLink }) {
  console.log("videoLink", videoLink);

  return (
    <>
      {videoLink && (
       <div className="md:px-12 px-8">
       <video
         className="rounded-xl"
         controls={true} // Show seekbar controls
         playsInline
         autoPlay
         loop
       >
         <source src={videoLink} type="video/mp4" />
       </video>
     </div>
      )}
    </>
  );
}