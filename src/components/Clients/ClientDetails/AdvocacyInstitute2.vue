<template>
  <section>
    <h1>Advocacy Institute (Round 2!)</h1>
    <p><strong>Duration:</strong> 1 months</p>
    <p><strong>Technologies:</strong> Ruby on Rails, React</p>
    <p><strong>Site:</strong>&nbsp;<a
      href="https://unhny.advocacy-institute.org/">https://unhny.advocacy-institute.org/</a></p>
    <p>
      I worked with Advocacy Institute again to rebuild and add features to a
      subsite that pull data from <a href="">Cardio</a> and generates a map of
      settlement housing programs in the NYC area.<br/>
      <br/>
      This was an exciting and challenging project. I experimented with using an
      <a href="https://github.com/mileszs/wicked_pdf">HTML to PDF library</a>, but ultimately decided to construct the PDF template
      <a href="https://github.com/prawnpdf/prawn">"by hand"</a> because styling
      the PDF with CSS proved to limiting. I established a pattern that allowed
      us to build the PDF template in a componentized manner, and reuse common
      components and styles.<br/>
      <br/>

      I did another interesting thing on this project, which almost constituted
      heresy under the strict best practices I typically adhere to: I built the
      application without tests. It wasn't an easy decision, but most of the
      application involves directly using the PDF generator, and building a
      complete mock or setting up some sort of PDF snapshot testing would have
      taken more time than we had on an already tight deadline. Can't win 'em
      all.
    </p>
  </section>
</template>

<script>
export default {
  name: 'advocacy-institute-2',
};
</script>
