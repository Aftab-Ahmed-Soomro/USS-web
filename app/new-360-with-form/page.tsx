"use client";

import Link from "next/link";
import { Header } from "../components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { ConsultationForm } from "../components/ConsultationForm";
import { Brands } from "../components/Brands";
import { Testimonials } from "../components/Testimonials";
import { GoodCompanyMap } from "../components/GoodCompanyMap";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
import Stagger from "../components/Stagger";
import StaggerItem from "../components/Staggeritem";
import { PowerOf360 } from "../components/PowerOf360";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-4 min-[375px]:px-6 pb-[40px] pt-[40px] text-white sm:pb-[72px] sm:pt-[78px]">
      <style>{`
        @keyframes glow-move-tl {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(8vw, 4vw) scale(1.15); }
          66% { transform: translate(3vw, 8vw) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes glow-move-br {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-8vw, -4vw) scale(1.15); }
          66% { transform: translate(-3vw, -8vw) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-glow-tl {
          animation: glow-move-tl 8s ease-in-out infinite;
        }
        .animate-glow-br {
          animation: glow-move-br 8s ease-in-out infinite;
        }
      `}</style>

      {/* Top Left Gradient */}
      <div 
        className="pointer-events-none absolute -left-[20%] -top-[20%] h-[80vw] max-h-[800px] min-h-[500px] w-[80vw] max-w-[800px] min-w-[500px] rounded-full opacity-40 blur-[100px] animate-glow-tl"
        style={{ background: 'radial-gradient(circle, #FF5500 0%, rgba(255,85,0,0) 70%)' }}
      />

      {/* Bottom Right Gradient */}
      <div 
        className="pointer-events-none absolute -bottom-[20%] -right-[20%] h-[80vw] max-h-[800px] min-h-[500px] w-[80vw] max-w-[800px] min-w-[500px] rounded-full opacity-40 blur-[100px] animate-glow-br"
        style={{ background: 'radial-gradient(circle, #FF5500 0%, rgba(255,85,0,0) 70%)' }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1150px] gap-10 lg:grid-cols-[minmax(0,660px)_430px] lg:items-center lg:justify-between">
        <Stagger staggerDelay={0.15}>
          
          <StaggerItem>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase leading-[50%] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white">
              we don’t just {" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white tracking-[-1px] sm:tracking-[-2.8px]">
                market
              </span>
            </h1>
            <h1 className="mt-[24px] max-w-[700px] font-[var(--font-be-vietnam)] text-[32px] font-bold lowercase leading-[50%] tracking-[-1px] sm:tracking-[-3px] sm:text-[58px] text-white">
              we scale{" "}
              <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] lowercase font-normal timesFontFamily italic text-white tracking-[-1px] sm:tracking-[-2.8px]">
                brands
              </span>            
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-[24px] min-[375px]:mt-[30px] sm:mt-[50px] max-w-[600px] font-[var(--font-inter)] text-[13px] text-white/90 sm:text-[18px]">
              We are a 360 digital marketing agency that combine strategy, creative and performance marketing into one connected system designed to scale your business. 
            </p>
            <p className="mt-[40px] max-w-[600px] font-[var(--font-inter)] text-[13px]  text-white/90 sm:text-[18px]">
              Trusted by 100+ SMEs across UK, US & UAE.
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link
              className="mt-[24px] sm:mt-[36px] inline-flex h-[46px] sm:h-[38px] min-w-[178px] items-center justify-center rounded-full bg-[#ff5500] px-7 font-[var(--font-be-vietnam)] text-[12px] sm:text-[13px] tracking-[0.52px] font-bold text-white transition uppercase hover:bg-[#ff6b1f]"
              href="/contact"
            >
              Book a Consultation
            </Link>
          </StaggerItem>
        </Stagger>

        <ConsultationForm />
      </div>
    </section>
  );
}

export default function New360WithForm() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="pointer-events-none absolute left-[-40px] top-[76px] h-[357px] w-[377px] rounded-full bg-[#7a2609] opacity-80 blur-[90px]" />
      <div className="pointer-events-none absolute right-[-62px] top-[183px] h-[536px] w-[360px] rounded-full bg-[#8a330d] opacity-80 blur-[98px]" />
      <div className="pointer-events-none absolute bottom-[-120px] left-0 h-[180px] w-full bg-[#5b1803] opacity-55 blur-[80px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[4px] bg-[#222]" />
        <Header />
        <Hero />
        <Brands />
        <PowerOf360 />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center items-center pt-4 sm:pt-8 bg-black"
        >
          <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
            marketing{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
              strategy
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/marketing-strategy.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/level-of-funnel.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black pr-20">
          <Image
            src="/assets/360/strategyGoal.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center items-center pt-4 sm:pt-8 bg-black">
          <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
            meta{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
              ads
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black">
          <Image
            src="/assets/360/meta-1.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black">
          <Image
            src="/assets/360/targetPeople.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/revenue1.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center items-center pt-4 sm:pt-8 bg-black">
          <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
            paid{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
              search
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black pt-20">
          <Image
            src="/assets/360/paid-1.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black">
          <Image
            src="/assets/360/platforms.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6 -mt-20">
          <Image
            src="/assets/360/revenue2.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center items-center pt-4 sm:pt-8 bg-black">
          <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
            email{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
              marketing
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/email-1.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/brandStrategy.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/email-visuals.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center items-center -mt-8 bg-black">
          <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
            whatsapp &{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
              sms
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/whatsapp.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/sms-flow.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center items-center pt-4 sm:pt-8 bg-black">
          <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
            social{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
              media
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/social-platforms.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/quote-1.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/social-grids.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/social-services.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/revenue3.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center items-center pt-4 sm:pt-8 pb-8 bg-black">
          <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
            content{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
              creation
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/content-1.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/quote-2.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/grids.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center items-center pt-4 sm:pt-8 bg-black">
          <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
            web design{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
              & development
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/dedication.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/case-1.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/mutiverse-1.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center items-center pt-4 sm:pt-8 bg-black">
          <h2 className="font-[var(--font-be-vietnam)] text-[32px] sm:text-[58px] font-medium text-white lowercase tracking-[-1px] sm:tracking-[-2px]">
            branding &{" "}
            <span className="font-[var(--font-cormorant)] text-[42px] sm:text-[72px] font-normal italic timesFontFamily tracking-[-1px] sm:tracking-[-2.8px]">
              graphics
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/case-2.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/branding.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 w-full flex justify-center bg-black px-6">
          <Image
            src="/assets/360/strategy-1.png"
            alt="Marketing Strategy"
            width={1150}
            height={800}
            className="w-full max-w-[1350px] h-auto object-contain rounded-2xl"
          />
        </motion.div>
        <Testimonials />
        <GoodCompanyMap />
        <Team />
        <Footer />
    </div>
  )
}