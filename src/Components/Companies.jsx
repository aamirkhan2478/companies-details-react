import React, { useEffect, useState } from "react";
import { FaArrowCircleRight, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../assets/styles/companies.css";
import { v4 as uuidv4 } from "uuid";
import { fetchCompanies } from "../Redux/Companies/companies";

const Companies = () => {
  const [companyInfo, setCompanyInfo] = useState("");
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const { companies } = useSelector((state) => state.company);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  const select = (e) => {
    setCompanyInfo(e.target.value);
    const symbol = e.target.value.slice(0, 8);
    setSelected(symbol);
  };

  return (
    <>
      <div className="f-box">
        <div className="text-field">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Company"
          />
          <FaSearch fontSize={10} className="search-icon" />
        </div>
        <select value={companyInfo} onChange={select}>
          <option value="">Select Company</option>
          {companies.map((company) => (
            <option key={uuidv4()} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      </div>
      <div className="container">
        <h3>Industrial Average</h3>
      </div>
      <div className="bg-pink">
        <h3>Companies Name</h3>
        <div className="row">
          {companies
            .filter((company) => {
              const data = Object.keys(company).some((key) => {
                const res =
                  company[key].toLowerCase().includes(selected.toLowerCase()) &&
                  company[key].toLowerCase().includes(search.toLowerCase());
                return res;
              });
              return data;
            })
            .map((company) => (
              <div
                key={uuidv4()}
                className="col-6"
                onClick={() => navigate(`/details/${company.symbol}`)}
                aria-hidden="true"
              >
                <FaArrowCircleRight className="icon-arrow" />
                <ul className="lists">
                  <li>
                    {company.name}
                    <span>({company.symbol})</span>
                  </li>
                  <li>{company.headQuarter}</li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Companies;
