import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import "tailwindcss";
export default function Home() {
  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Card
        title="Modern Apartment"
        description="3 bedroom flat in Lekki ://Phase 1"
        imageUrl="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        onClick={() => alert('You clicked the card!')}
      />

      <Button 
      label="Buy"
      />
    </main>

    
  );
}
