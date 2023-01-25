CREATE MIGRATION m16urym3wdc367b37bl3ancmjbaslxvpiv7bo2yqytr6uvwuvs32ka
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::BlogPost {
      CREATE REQUIRED PROPERTY content -> std::str {
          SET default := '';
      };
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
