import React, { useState, useLayoutEffect } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Search from "components/datasets/Search";
import {
  LawJustice,
  WomenChild,
  Police,
  HomeAffairs,
} from "components/icons/ListingIcons";
import Toggle from "components/_shared/Toggle";
import { datasetPopulation, categoryIcon, stripTitle } from "utils";
import { useSearch } from "utils/search";
import Seo from "components/_shared/seo";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const SectionTypeData = {
  Ministries:
    "This section lists all the budget datasets that are curated at a ministry / department level.",
  Categories:
    "This section lists all the budget datasets for scheme categories. These categories represent a collection of schemes and are present within the budget documents.",
  Schemes:
    "This section lists all the budget datasets for various schemes that are present within a budget document.",
};

const Lisitng = ({ data }) => {
  const [filteredObj, setFilteredObj] = useState(data);
  const router = useRouter();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const tl = gsap.timeline();

    // tl.to(".listing__header p", {
    //   y: "-=60",
    //   ease: "power2.out",
    //   delay: 0.5,
    // });
    // tl.to(".listing__header p", {
    //   opacity: 0,
    //   ease: "power2.out",
    //   delay: -0.5,
    // });
    // tl.to(".listing__header", {
    //   y: "-=60",
    //   ease: "power2.out",
    //   delay: -0.5,
    // });
    // tl.to(".listing__header form", {
    //   height: "80%",
    //   ease: "power2.out",
    //   delay: -0.5,
    // });

    // const actionNav = gsap.to(".listing__header", {
    //   y: "-=60",
    //   duration: 0.5,
    //   ease: "power2.in",
    //   paused: true,
    // });

    // ScrollTrigger.create({
    //   trigger: ".listing__header",
    //   start: ".listing__header",
    //   end: 99999,
    //   pin: true,
    //   pinSpacing: false,
    //   scrub: true,

    //   onEnter: () => tl.play(),
    //   onLeaveBack: () => tl.reverse(),
    // });
  }, []);

  function changeResult(val) {
    const newObj = useSearch(val, data);
    setFilteredObj(newObj);
  }

  return (
    <>
      <Seo />

      <main className="listing">
        <section className="listing__header">
          <div className="container">
            <h2 className="heading">Budget Datasets (2016-17 - 2021-22)</h2>
            <p>
              Select a data set from the list below to view the trends in
              budget estimates, revised estimates, actual expenditure and fund
              utilisation for a scheme, scheme category or a
              ministry/department. Data points for all indicators are available
              from 2016-17 onward.
            </p>
            <Search newSearch={changeResult} />
          </div>
        </section>

        <section className="listing__indicators container">
          <div>
            <h3>Ministry or Department Indicators: </h3>
            <ul>
              <li>
                <LawJustice />
                <span>Law &amp; Justice</span>
              </li>
              <li>
                <WomenChild />
                <span>Women &amp; Child Development</span>
              </li>
              <li>
                <Police />
                <span>Police</span>
              </li>
              <li>
                <HomeAffairs />
                <span>Home Affairs</span>
              </li>
            </ul>
          </div>
        </section>

        {filteredObj.ministry.length > 0 && (
          <section className="listing__items container">
            <h3>
              Ministries <Toggle data={SectionTypeData.Ministries} />
            </h3>

            <ul>
              {filteredObj.ministry.map((item, index) => (
                <li key={`ministryList-${index}`}>
                  <Link href={`${router.pathname}/${item.id}`}>
                    <a>
                      {categoryIcon(item.tags)}
                      <span>{stripTitle(item.title)}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {filteredObj.category.length > 0 && (
          <section className="listing__items container">
            <h3>
              Categories <Toggle data={SectionTypeData.Categories} />
            </h3>

            <ul>
              {filteredObj.category.map((item, index) => (
                <li key={`categoryList-${index}`}>
                  <Link href={`${router.pathname}/${item.id}`}>
                    <a>
                      {categoryIcon(item.tags)}

                      <span>{stripTitle(item.title)}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {filteredObj.scheme.length > 0 && (
          <section className="listing__items container">
            <h3>
              Schemes <Toggle data={SectionTypeData.Schemes} />
            </h3>

            <ul>
              {filteredObj.scheme.map((item, index) => (
                <li key={`schemeList-${index}`}>
                  <Link href={`${router.pathname}/${item.id}`}>
                    <a>
                      {categoryIcon(item.tags)}

                      <span>{stripTitle(item.title)}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const ministry = await fetch(
    "https://justicehub.in/api/3/action/package_search?fq=(tags:ministry AND groups:budgets-for-justice)&rows=200"
  ).then((res) => res.json());
  const scheme = await fetch(
    "https://justicehub.in/api/3/action/package_search?fq=(tags:scheme AND groups:budgets-for-justice)&rows=200"
  ).then((res) => res.json());
  const category = await fetch(
    "https://justicehub.in/api/3/action/package_search?fq=(tags:scheme-category AND groups:budgets-for-justice)&rows=200"
  ).then((res) => res.json());
  const data = {
    ministry: datasetPopulation(ministry.result.results),
    scheme: datasetPopulation(scheme.result.results),
    category: datasetPopulation(category.result.results),
  };

  return {
    props: {
      data,
    },
  };
};

export default Lisitng;
