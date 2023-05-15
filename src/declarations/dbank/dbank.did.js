export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'compound' : IDL.Func([], [], ['oneway']),
    'deduct' : IDL.Func([IDL.Float64], [IDL.Float64], []),
    'greet' : IDL.Func([IDL.Text], [], ['oneway']),
    'topUp' : IDL.Func([IDL.Float64], [IDL.Float64], []),
  });
};
export const init = ({ IDL }) => { return []; };
