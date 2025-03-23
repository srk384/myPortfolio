import { useState, useEffect } from "react";

const useActiveSection = (sectionIds) => {

  const [activeSection, setActiveSection] = useState("");
    
  useEffect(() => {

    const observerOptions = {
     
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

export default useActiveSection;