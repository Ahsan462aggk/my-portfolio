'use client';

interface LinkedInEmbedProps {
  embedLink: string;
  embedHeight: number;
  title: string;
}

export default function LinkedInEmbed({ embedLink, embedHeight, title }: LinkedInEmbedProps) {
  return (
    <div className="mt-12">
      <iframe
        src={embedLink}
        height={embedHeight}
        className="w-full rounded-lg"
        allowFullScreen
        title={`${title} Demo`}
      />
    </div>
  );
} 