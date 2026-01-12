import { Timeline, VisonAndMission } from '@/components/About'
import React from 'react'
export const metadata = {
  title: "About ",
};
const AboutSviet = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About SVIET

            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="flex items-start gap-3">
                <p className='text-justify'>
                  Swami  Vivekanand  Institute  of  Engineering  &  Technology  (SVIET)  was  established  in  2004  stands  as  a NAAC-accredited premier institution committed to excellence in technical education and innovation-driven learning.  As  the  flagship  institute  of  the  Swami  Vivekanand  Group  of  Institutes  (SVGOI),  SVIET  is governed  by  the  Shri  Raghu  Nath  Rai  Memorial  Educational  &  Charitable  Trust,  and  continues  to  uphold the  visionary  ideals  of  Swami  Vivekananda—blending  academic  rigor  with  character  building,  ethical leadership, and holistic development.                             </p>
              </div>
              <div className="flex  items-start gap-3">
                <p className='text-justify '>
                  Over the past two decades, SVGOI has grown into a multidisciplinary academic ecosystem offering a wide range   of   professional   programs   in   Engineering,   Pharmacy,   Education,   Management,   Law,   IT,   and Vocational  Training.  Each  institution  within  the  group  is  united  by  a  shared  commitment  to  nurturing industry-ready, responsible, and future-focused professionals.              </p>
              </div>
              <div className="flex items-start gap-3">
                <p className='text-justify '>
                  As  the  oldest  engineering  institution  in  the  region,  SVIET  offers  a  wide  spectrum  of  AICTE-approved undergraduate  and  postgraduate  programs,  affiliated  with  IKGPTU.  With  modern  infrastructure,  highly experienced  faculty,  and  a  curriculum  aligned  to  industry  standards,  we  ensure  that  our  students  are  well-prepared to succeed in today’s competitive global environment.                  </p>
              </div>


            </div>
          </div>
        </div>
      </section>
      <Timeline />
      <VisonAndMission />
    </>
  )
}

export default AboutSviet