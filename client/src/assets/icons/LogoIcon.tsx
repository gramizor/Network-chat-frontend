interface IIconProps {
  fill?: string;
}

export const LogoIcon = ({ fill }: IIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 471.78 390.19">
      <g id="16c01748-dfd1-494a-a92d-2e6d9c6db5d5" data-name="Слой 2">
        <g id="5dcc330f-dc90-413e-9837-c23e4c2f9b5e" data-name="Слой 1">
          <path
            fill={fill || "#00AEEF"}
            className="61d24370-8931-4966-8e09-470aa61e3bc9"
            d="M204.48,381.4c-102.9,0-186.34-83.4-186.34-186.31S101.58,8.8,204.48,8.8A186.39,186.39,0,0,1,378.74,129.08,195.22,195.22,0,0,0,195.09,0C87.35,0,0,87.36,0,195.09s87.35,195.1,195.09,195.1A195.2,195.2,0,0,0,378.74,261.13,186.37,186.37,0,0,1,204.48,381.4"
          />
          <path
            fill={fill || "#00AEEF"}
            className="61d24370-8931-4966-8e09-470aa61e3bc9"
            d="M465.54,219.26h-66c-12-.64-11.71-8.39-11.71-24.16s-.25-23.51,11.71-24.15h72.19s0-13.24-6.24-13.23H387.88c-6.34,0-36.87,0-36.87,37.38s30.53,37.38,36.87,37.38h83.9s0-13.22-6.24-13.22"
          />
          <path
            fill={fill || "#00AEEF"}
            className="61d24370-8931-4966-8e09-470aa61e3bc9"
            d="M184.56,157.72H106.91c-6.36,0-36.87,0-36.87,37.37v37s36.87,0,36.87-6.25V195.09c0-15.75-.26-23.51,11.7-24.14h72.2s0-13.24-6.25-13.23"
          />
          <path
            fill={fill || "#00AEEF"}
            className="61d24370-8931-4966-8e09-470aa61e3bc9"
            d="M325.05,157.72H247.39c-6.34,0-36.87,0-36.87,37.37v37s36.87,0,36.87-6.25V195.09c0-15.75-.25-23.51,11.71-24.14h72.2s0-13.24-6.25-13.23"
          />
        </g>
      </g>
    </svg>
  );
};
