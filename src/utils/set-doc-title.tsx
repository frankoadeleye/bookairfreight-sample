import { useEffect } from "react";

const SetDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `BookAirFreight | ${title}`;
  }, [title]);
};

export { SetDocumentTitle };
