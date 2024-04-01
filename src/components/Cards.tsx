import Card from "@/components/Card";

export default function Cards() {
  return (
    <div>
      <div>
        <div className="mt-10 mb-10">
          <h2 className="text-4xl text-center font-bold">Services we offer</h2>
        </div>
      </div>
      <section className="flex flex-wrap gap-5 px-10 justify-center items-center mt-10 mb-10">
        <Card title="Social Media Automation"></Card>
        <Card title="Ecommerce"></Card>
        <Card title="Website"></Card>
      </section>
    </div>
  );
}
