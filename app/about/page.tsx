const About = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-700 text-center my-5">
        About Mbiyuinsights
      </h1>
      <div className="text-zinc-700 letter-spacing-1 ">
        <p className="">
          MbiyuInsight is a dedicated digital space built for the people who
          make learning happen — teachers, students, parents, and everyone who
          believes that education is Kenya's greatest asset. We exist to inform,
          inspire, and connect the academic community with content that is
          relevant, practical, and rooted in the realities of our classrooms and
          campuses.
        </p>
        <h2 className="text-2xl font-bold mt-5">What we right about</h2>
        <p>
          MbiyuInsight covers the full spectrum of the Kenyan academic journey.
          On the education and academics side, we break down policy changes and
          curriculum updates — from CBC and junior secondary to university
          admissions and TVET pathways — in language that is clear and
          actionable. We offer study tips, exam preparation strategies, and
          career guidance for students at every level. For teachers, we provide
          classroom management ideas, lesson planning insights, professional
          development resources, and a platform to share experiences from the
          field. Under our lifestyle pillar, we speak to the human side of
          education: teacher wellbeing, work-life balance, financial literacy
          for educators, student life beyond the lecture hall, campus culture,
          and the everyday realities of growing up and working in Kenya's
          education ecosystem. If it affects the people who teach and learn in
          Kenya, it belongs here.
        </p>
        <h2 className="text-2xl font-bold mt-5">Who we serve?</h2>
        <ul className="list-disc ml-10">
          <li>
            A <b>teacher</b> looking for practical ideas, professional growth,
            and a voice in the national education conversation.
          </li>
          <li>
            A <b>student</b> navigating exams, career choices, campus life, and
            the pressures of modern learning.
          </li>
          <li>
            A <b>parent</b> or guardian seeking clarity on how the education
            system works and how best to support your child.
          </li>
          <li>
            An <b>education enthusiast or professional</b> who cares deeply
            about where Kenyan education is going and wants to stay informed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
