export default function InstagramReel({ videoLink }) {
  return (
    <>
      {videoLink && (
        <section
          className="md:px-12 px-8"
          aria-labelledby="instagram-reel-heading"
        >
          {/* ✅ Invisible SEO heading */}
          <h2 id="instagram-reel-heading" className="sr-only">
            Embedded video reel related to this content
          </h2>

          <figure>
            <video
              className="rounded-xl"
              controls={true}
              playsInline
              autoPlay
              loop
              aria-label="Embedded short video reel"
            >
              <source src={videoLink} type="video/mp4" />
              {/* Fallback text */}
              Your browser does not support the video tag.
            </video>

            {/* Invisible caption for SEO & accessibility */}
            <figcaption className="sr-only">
              Short-form video content embedded to visually support and enhance
              the surrounding article or page content.
            </figcaption>
          </figure>

          {/* 🔍 SEO reinforcement */}
          <p className="sr-only">
            This embedded video provides additional visual context and engagement,
            helping users better understand the topic discussed on this page.
          </p>
        </section>
      )}
    </>
  );
}
