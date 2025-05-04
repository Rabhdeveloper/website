import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About RS Engineering</h1>
        <p style={styles.subtitle}>
          Delivering innovation, excellence, and engineering solutions that shape the future.
        </p>
      </header>

      <section style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>Who We Are</h2>
        <p style={styles.text}>
          RS Engineering is a leading provider of cutting-edge engineering
          solutions, specializing in delivering high-quality projects across
          multiple industries. With years of expertise and a dedicated team, we
          bring innovative ideas to life and ensure precision in every project
          we undertake.
        </p>
      </section>

      <section style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>Our Vision</h2>
        <p style={styles.text}>
          To be a global leader in engineering solutions, setting the benchmark
          for quality, sustainability, and innovation.
        </p>
      </section>

      <section style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.text}>
          At RS Engineering, our mission is to deliver robust engineering
          services that drive growth, improve infrastructure, and create a
          sustainable future for generations to come.
        </p>
      </section>

      <section style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>What We Do</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
          Electrictal Engineering: automation , Powerfactor, and essential
            private and public utilities.

            Providing world-class manufacturing and
            design solutions.
          </li>
         
          
          <li style={styles.listItem}>
            Industrial Solutions: Offering tailor-made solutions to optimize
            production and efficiency.
          </li>
        </ul>
      </section>

      <section style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <p style={styles.text}>
          RS Engineering is built on a foundation of integrity, quality, and
          customer satisfaction. We believe in fostering strong partnerships
          with our clients and delivering solutions that exceed expectations.
        </p>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          &copy; {new Date().getFullYear()} RS Engineering. All rights reserved.
        </p>
        <p style={styles.footerText}>
          <a href="/contact" style={styles.link}>Contact Us</a> | <a href="/services" style={styles.link}>Our Services</a>
        </p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#2E86C1",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
  },
  contentSection: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    color: "#2E86C1",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1rem",
    color: "#555",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    color: "#555",
  },
  listItem: {
    marginBottom: "10px",
    fontSize: "1rem",
  },
  footer: {
    textAlign: "center",
    marginTop: "30px",
    borderTop: "1px solid #ddd",
    paddingTop: "20px",
  },
  footerText: {
    fontSize: "0.9rem",
    color: "#777",
  },
  link: {
    textDecoration: "none",
    color: "#2E86C1",
  },
};

export default About;
