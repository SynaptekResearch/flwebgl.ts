/// <reference path="../GL.ts" />
/// <reference path="IShader.ts" />

module flwebgl.e.shaders
{
  import GL = flwebgl.e.GL;

  export class ShaderImageSpaceCoverage implements IShader
  {
    private gl: GL;

    constructor() {
      console.log("ShaderImageSpaceCoverage");
    }

    setGL(gl:GL) {
      this.gl = gl;
    }

    Xb() {

    }

    e(a, b) {

    }

    destroy() {

    }
  }
}
