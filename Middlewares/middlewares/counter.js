let counter = 0;

export default function count(req,res,next) 
{
    counter++;
    req.requestCount = counter;
    next();
}

