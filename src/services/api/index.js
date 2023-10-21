const APIS = {
  getCategories : async () => {
    try {
      const response = await fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      return data.data; 
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },
  getQuestions : async () => {
    try {
      const response = await fetch("https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions");
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Veriler alınamadı.");
      }
    } catch (error) {
      console.error("Hata oluştu:", error);
      throw error;
    }
  }};

  export default APIS;