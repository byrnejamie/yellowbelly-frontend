import { Button } from "@/components/ui";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] py-24">
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-[#F5C731]/10 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-slate-400/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to Turn Reviews Into Global Sales?
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Get LingoReview and let your social proof speak every language.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#pricing" size="lg">
              Get LingoReview
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Questions? Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
