"use client";
import { useEffect, useState } from "react";

interface SchemaData {
  // Define your schema data structure here
}

const SchemaFetcher = ({ slug }: { slug: string }) => {
  const [schema, setSchema] = useState<SchemaData | null>(null);

  useEffect(() => {
    const fetchSchema = async () => {
      try {
        const response = await fetch(`/api/blogs/${slug}/schema`);
        const data = await response.json();
        setSchema(data.schema);
      } catch (error) {
        console.error("Error fetching schema:", error);
      }
    };

    fetchSchema();
  }, [slug]);

  return (
    <div>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </div>
  );
};

export default SchemaFetcher;
